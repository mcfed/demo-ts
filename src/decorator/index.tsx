export const param = () => {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    var fn = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      args = args.map((value) => {
        let payload = {
          // @ts-ignore
          type: `${this.__proto__.constructor.name}/${propertyKey}`,
          payload: value,
        };

        //@ts-ignore
        this.middleware.fetchParams(payload);
      });
      await fn.apply(this, args);
    };
  };
};

export const loading = () => {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    var fn = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      //@ts-ignore
      let type = `${this.__proto__.constructor.name}/${propertyKey}`;
      let reqPayload = {
        type: type,
        payload: true,
      };
      let resPayload = {
        type: type,
        payload: false,
      };

      // @ts-ignore
      const { fetchReq, fetchRes } = this.middleware;

      fetchReq(reqPayload);
      if (fn.constructor.name === 'AsyncFunction') {
        await fn.apply(this, args);
      } else {
        fn.apply(this, args)
      }
      fetchRes(resPayload);
    };
  };
};


export const other = () => {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    var fn = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      args = args.map((value) => {
        console.log(value)
      });
      fn.apply(this, args);
    };
  };
};
