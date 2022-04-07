export default {
    // 搜索延时作用函数

    // fn执行的函数
    // t 等待的时间

    debounce(fn, t) {
        let delay = t || 500;
        let timer;
        // console.log(fn)
        // console.log(typeof fn)
        return function() {
            let args = arguments;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, args);
            }, delay);
        }
    },
    // debounce(funs,outtime){
    //     return function(){

    //     }
    // }
    throttle(func, wait) {
        let context, args
        let old = 0
        return function() {
            context = this
            args = arguments
                //    获取当前时间戳
            let now = new Date().valueOf()
            if (now - old > wait) {
                // 立即执行
                func.apply(context, args)
                old = now
            }
        }
    },

}