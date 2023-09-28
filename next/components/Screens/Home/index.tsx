import Layout from '@/components/Layout';
import Advantages from '@/components/Advantages/Advantages';
import NewsSlider from '@/components/News/NewsSlider';
import PaginationSliderScrollbar from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbar';
import Form from '@/components/Form/Form';
import FeaturesBlock from '@/components/FeaturesBlock/FeaturesBlock';
import MainBlock from '@/components/MainBlock';
import { ParallaxProvider } from 'react-scroll-parallax';
import PreviewBlock from '@/components/PreviewBlock/PreviewBlock';
import ProjectSlider from '@/components/Projects/ProjectSlider';
import { formData } from '@/components/Form/data';
import Slider from '@/components/Slider/Slider';
import { options } from '@/app/mock/sliderOptions';

const Home = () => (
  <Layout>
    <ParallaxProvider>
      <MainBlock />
    </ParallaxProvider>
    <section className="section-gutter">
      <FeaturesBlock />
    </section>
    <section className="section-gutter">
      <ProjectSlider />
    </section>
    <section className="section-gutter">
      <PreviewBlock />
    </section>
    <section className="section-gutter">
      <NewsSlider />
    </section>
    <section className="section-gutter">
      <PaginationSliderScrollbar />
    </section>
    <section className="section-gutter">
      <Advantages />
    </section>
    <section className="section-gutter">
      <Slider title="Преимущества" options={options} />
    </section>
    <section className="section-gutter">
      <Form data={formData.data} />
    </section>
  </Layout>
);

export default Home;
