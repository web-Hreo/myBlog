import {
  get,
  post
} from './request';

/*@地址查询*/
export const apiAddress = () => get('https://api.it120.cc/common/ip')

/*
 *@天气查询
 *@params	{String}	city [可通过 城市中英文名称、ID和IP地址进行，例如city=北京，city=beijing，city=CN101010100，city= 60.194.130.1]
 */
export const weather = (city) => get('/jdapi/he/freeweather?city=' + city + '&appkey=09b204bf1bf14028b01dfb2ffb9d45eb')