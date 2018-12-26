
import fetch from './fetch';
/**
 *  api异步请求
 */



/**
 *  21.分词
 */
export const participle  = params => fetch('/api/QuickQA/GetKeyWords' , params,"POST");  //  将一句话分成多个词汇




