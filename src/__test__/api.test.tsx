import { fireEvent, render } from '@testing-library/react';
import { App } from '../App';
import { ProductService } from '../services';

function reverseString(str:any) {
  return [...str].reverse().join("");
}

test('api response sholud be contain id', () => {
  localStorage.setItem("__api", reverseString("/snoitcnuf/yfilten./ppa.yfilten.noysanket//:sptth"));
  localStorage.setItem("__token", reverseString("aa86ee3256efd341f8e76398fc7efaee_taphs"));
  return ProductService.Get().then(data => {
    localStorage.removeItem("__api");
    localStorage.removeItem("__token");
    expect(Object.keys(data[0])).toContainEqual('id');
  });
});

test('api response sholud be contain title', () => {
  localStorage.setItem("__api", reverseString("/snoitcnuf/yfilten./ppa.yfilten.noysanket//:sptth"));
  localStorage.setItem("__token", reverseString("aa86ee3256efd341f8e76398fc7efaee_taphs"));
  return ProductService.Get().then(data => {
    localStorage.removeItem("__api");
    localStorage.removeItem("__token");
    expect(Object.keys(data[0])).toContainEqual('title');
  });
});