import NicoVideoJP from './NicoVideoJP';
import BaseWrapper from './BaseWrapper';

class nvcomment_NicoVideoJP extends NicoVideoJP {
    static subDomain = 'nvcomment';
    constructor(...args: ConstructorParameters<typeof BaseWrapper>) {
        super(nvcomment_NicoVideoJP.subDomain, ...args);
    }
}

export default nvcomment_NicoVideoJP;
