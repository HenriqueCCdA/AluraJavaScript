export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => value =>
    fns.reduceRight((previsousValeu, fn) => fn(previsousValeu), value);

export const pipe = (...fns) => value =>
    fns.reduce((previsousValeu, fn) => fn(previsousValeu), value);

export const takeUntil = (times, fn) => () => times-- >0 && fn();

export const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    }

}