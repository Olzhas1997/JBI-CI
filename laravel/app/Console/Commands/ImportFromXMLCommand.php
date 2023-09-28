<?php

namespace App\Console\Commands;

use App\Data\ProductData;
use App\Helpers\ParseDataHelper;
use App\Models\Complex;
use App\Models\House;
use App\Models\Product;
use Illuminate\Console\Command;
use ZipArchive;

class ImportFromXMLCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:xml';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import data from xml file';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $zipFile = env('IMPORT_PATH_TO_ZIP');
        $xmlData = $this->extractXmlFromZip($zipFile);
        if (! $xmlData) {
            $this->error('File does not exist');
            return 1;
        }
        $this->processXmlData($xmlData);
        return 0;
    }

    private function extractXmlFromZip(string $zipFile): ?array
    {
        $zip = new ZipArchive;
        if ($zip->open($zipFile)) {
            $xmlFile = $zip->getNameIndex(0);
            $xml = file_get_contents("zip://$zipFile#$xmlFile");
            $zip->close();

            return json_decode(
                json_encode(
                    simplexml_load_string(
                        $xml,
                        "SimpleXMLElement",
                        LIBXML_NOCDATA
                    )
                ), true
            );
        }
        return null;
    }

    private function processXmlData(?array $data): void
    {
        if (! isset($data['Классификатор']['Группы']['Группа'])) {
            return;
        }

        $complexData = $data['Классификатор']['Группы']['Группа'];

        if (isset($complexData['Ид']) && isset($complexData['Наименование'])) {
            $complex = Complex::updateOrCreate(['external_id' => $complexData['Ид']], [
                'title' => $complexData['Наименование'],
            ]);

            if (isset($complexData['Группы']['Группа'])) {
                $this->saveHouses($complexData['Группы']['Группа'], $complex->id);
            }
        }

        if (isset($data['Каталог']['Товары']['Товар'])) {
            $this->saveProducts($data['Каталог']['Товары']['Товар']);
        }
    }

    private function saveHouses(array $data, int $complexId): void
    {
        foreach ($data as $houseData) {
            if (isset($houseData['Ид']) && isset($houseData['Наименование'])) {
                House::updateOrCreate(['external_id' => $houseData['Ид']], [
                    'title'      => $houseData['Наименование'],
                    'complex_id' => $complexId,
                ]);
            }
        }
    }

    private function saveProducts(array $data): void
    {
        $productDataList = [];
        foreach ($data as $productData) {
            $preparedProductData = ParseDataHelper::prepareProductFields($productData['ЗначенияСвойств']['ЗначенияСвойства']);
            $preparedProductData['external_id'] = $productData['Ид'];
            $preparedProductData['house_id'] = $productData['Группы']['Ид'];
            foreach ($productData['ЗначенияРеквизитов']['ЗначениеРеквизита'] as $type) {
                if ($type['Значение'] !== 'Товар') {
                    $preparedProductData['type'] = $type['Значение'];
                }
            }
            $productDataList[] = (ProductData::from($preparedProductData))->toArray();
        }
        Product::upsert($productDataList, ['external_id']);
    }
}
