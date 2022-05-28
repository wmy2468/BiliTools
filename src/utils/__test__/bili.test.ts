import * as assert from 'assert';
import { getSignString } from '../bili';

const appkey = '1d8b6e7d45233436';
const appsec = '560c52ccd288fed045859ed18bffd973';
const params = {
  id: 114514,
  str: '1919810',
  test: 'いいよ，こいよ',
};

assert(
  getSignString(params, appkey, appsec) ===
    `appkey=1d8b6e7d45233436&id=114514&str=1919810&test=%E3%81%84%E3%81%84%E3%82%88%EF%BC%8C%E3%81%93%E3%81%84%E3%82%88&sign=01479cf20504d865519ac50f33ba3a7d`,
);
