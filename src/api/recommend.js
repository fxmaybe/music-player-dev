import jsonp from '@/assets/js/jsonp';
import {commonParams, options} from '@/api/config';
import axios from 'axios';

export function getRecommends() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = {
    ...commonParams,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  };

  return jsonp(url, data, options);
}

export function getRecommendList() {
  const url = '/api/getDiscList';

  const data = {
    ...commonParams,
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
    
  };

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}
