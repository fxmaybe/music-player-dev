import {commonParams} from '@/api/config';
import axios from 'axios';

export function getLyric(mid) {
  let url = '/api/lyric';

  let data = {
    ...commonParams,
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  };

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}