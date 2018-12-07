import ajax from './ajax';

const BASE='/api';

export const reqTopicList =()=>ajax(`/topicList`);
export const reqFocusList =()=>ajax(`/focusList`);
export const reqCateList =()=>ajax(`/cateList`);
export const reqTagList =()=>ajax(`/tagList`);
export const reqPolicyDescList =()=>ajax(`/policyDescList`);
export const reqCategory =()=>ajax(`/category`);
export const reqCategoryList =()=>ajax(`/categoryList`);
export const reqShiWu =()=>ajax(`/shiwu`);
export const reqNewProducts =()=>ajax(`/newproducts`);
export const reqTopicHomes =()=>ajax(`/topichomes`);