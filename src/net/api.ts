import { TaskConfig } from '@/config/globalVar';
import { baseURLs, RefererURLs } from '../constant/biliUri';
import { biliHttp, createAxios, defHttp } from '../utils/axios';

const accountApi = createAxios({
  baseURL: baseURLs.account,
  headers: {
    'user-agent': TaskConfig.USER_AGENT,
  },
});

const liveApi = createAxios({
  baseURL: baseURLs.live,
  headers: {
    Referer: RefererURLs.www,
    'user-agent': TaskConfig.USER_AGENT,
  },
});

const biliApi = createAxios({
  baseURL: baseURLs.api,
  headers: {
    Referer: RefererURLs.www,
    'user-agent': TaskConfig.USER_AGENT,
  },
});

const mangaApi = createAxios({
  baseURL: baseURLs.manga,
  headers: {
    'user-agent': TaskConfig.USER_AGENT,
  },
});

const vcApi = createAxios({
  baseURL: baseURLs.vc,
  headers: {
    'user-agent': TaskConfig.USER_AGENT,
  },
});

export { biliApi, vcApi, accountApi, mangaApi, liveApi, biliHttp, defHttp };
