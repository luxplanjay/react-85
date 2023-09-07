import { Layout } from './Layout';
import { RefExample } from './RefExample';
import { SkipMountEffect } from './SkipMountEffect';
import { UseMemoExample } from './UseMemoExample';
import { HttpReqAbort } from './HttpReqAbort';
import { HttpReqAbortOnEvent } from './HttpReqAbortOnEvent';

export const App = () => {
  return (
    <Layout>
      {/* <SkipMountEffect /> */}
      {/* <RefExample /> */}
      {/* <HttpReqAbort /> */}
      {/* <HttpReqAbortOnEvent /> */}
      <UseMemoExample />
    </Layout>
  );
};
