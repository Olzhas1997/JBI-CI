import { SocialServices } from '@/app/services/SocialServices';
import NewsCategoryServices from '@/app/services/news/NewsCategoryServices';
import NewsServices from '@/app/services/news/NewsServices';

type TypeService = {
  serviceTitle: string
};

const CurrentService = ({ serviceTitle }: TypeService) => {
  let service;
  switch (serviceTitle) {
    case 'SocialServices':
      service = SocialServices;
      break;
    case 'NewsCategoryServices':
      service = NewsCategoryServices;
      break;
    case 'NewsServices':
      service = NewsServices;
      break;
    default:
      service = SocialServices;
  }
  return service;
};

export { CurrentService };
