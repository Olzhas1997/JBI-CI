<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;

class ProductData extends Data
{
    public function __construct(
        public string  $external_id,
        public string  $house_id,
        public string  $type,
        #[MapInputName('FLOOR')]
        public ?int    $floor = null,
        #[MapInputName('NUMBER_ON_FLOOR')]
        public ?int    $number_on_floor = null,
        #[MapInputName('STATUS')]
        public ?string $status = null,
        #[MapInputName('NUMBER')]
        public ?string $number = null,
        #[MapInputName('SQUARE')]
        public ?float  $square = null,
        #[MapInputName('LEVELS')]
        public ?int    $levels = null,
        #[MapInputName('PLAN')]
        public ?string $plan = null,
        #[MapInputName('LAYOUT')]
        public ?string $layout = null,
        #[MapInputName('ROOMS')]
        public ?int    $rooms = null,
        #[MapInputName('KITCHEN')]
        public ?float  $kitchen = null,
        #[MapInputName('DEFINITION')]
        public ?string $definition = null,
        #[MapInputName('SECTION')]
        public ?string $section = null,
        #[MapInputName('SECTION_ID')]
        public ?string $section_id = null,
        #[MapInputName('LOCATION')]
        public ?string $location = null,
        #[MapInputName('OBJECT')]
        public ?string $object = null,
        #[MapInputName('PRICE')]
        public ?float  $price = null,
        #[MapInputName('STEP')]
        #[WithCast(DateTimeInterfaceCast::class, format: 'Y-m-d\TH:i:s')]
        public ?Carbon $step = null,
        #[MapInputName('COMPLETE')]
        public ?int    $complete = null,
        #[MapInputName('RENOVATION')]
        public ?string $renovation = null,
        #[MapInputName('LIVING_AREA')]
        public ?float  $living_area = null,
        #[MapInputName('COMMON_SQUARE')]
        public ?float  $common_square = null,
        #[MapInputName('SECOND')]
        public ?string $second = null,
        #[MapInputName('IMAGEFLAT')]
        public ?string $image_flat = null,
        #[MapInputName('IMAGEFLOOR')]
        public ?string $image_floor = null,
        #[MapInputName('IMAGEFORINT')]
        public ?string $image_for_int = null,
        #[MapInputName('IMAGE3D')]
        public ?string $image_3d = null,
        #[MapInputName('DISCOUNT_MAX')]
        public ?float  $discount_max = null,
        #[MapInputName('DISCOUNT_CAMPAING')]
        public ?string $discount_campaign = null,
        #[MapInputName('DISCOUNT_ID')]
        public ?string $discount_id = null,
        #[MapInputName('DISCOUNT_AMOUNT')]
        public ?float  $discount_amount = null
    ) {
    }
}
