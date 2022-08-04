import Service from "./Service";

export default class ServiceCenter {
    private static services: Map<Function, Service> = new Map();
    static add<T extends Service>(service: new () => T):T {
        if (!this.services.has(service)) {
            let s = new service();
            this.services.set(service, s);
            return s;
        }else{
            return this.services.get(service) as T;
        }
    }
    static remove<T extends Service>(service: new () => T) {
        let s = this.services.get(service);
        if (s) {
            s.destroy();
            this.services.delete(service);
        }
    }
    static get<T extends Service>(service: new () => T) {
        return this.services.get(service) as T;
    }
}