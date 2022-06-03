import { ProxyNativeModule } from './NativeModulesProxy.types';
declare global {
    var ExpoModules: undefined | {
        [key: string]: any;
    };
}
declare const NativeModulesProxy: {
    [moduleName: string]: ProxyNativeModule;
};
export default NativeModulesProxy;
//# sourceMappingURL=NativeModulesProxy.native.d.ts.map