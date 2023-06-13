export default function SingletonPattern(className) {
  let instance;
  return new Proxy(className, {
    construct(target, argArray) {
      if (!instance) {
        instance = new target(...argArray);
      }
      return Object.freeze(instance);
    }
  });
}
