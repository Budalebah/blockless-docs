import { conceptsRoutes } from './concepts';
import { docsRoutes } from './documentstion';
import { referenceRoutes } from './reference';

export const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/blocklessnetwork/docs-content/main';

export const contentSource = {
  [docsRoutes.overview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/index.md',
  [docsRoutes.faqGeneral]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/faq/index.md',
  [docsRoutes.faqNetwork]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/faq/network.md',
  [docsRoutes.faqSecurity]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/faq/security.md',
  [docsRoutes.faqFunctions]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/faq/functions.md',
  [docsRoutes.faqAccountBilling]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/faq/account-and-billing.md',
  [docsRoutes.functionComposability]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/composability.md',
  [docsRoutes.functionExtensions]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/extensions.md',
  [docsRoutes.functionGeneral]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/index.md',
  [docsRoutes.functionPublish]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/publish.md',
  [docsRoutes.functionQuickstart]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/quickstart.md',
  [docsRoutes.functionTypes]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/functions/types.md',
  [docsRoutes.accountBilling]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/account/billing.md',
  [docsRoutes.accountOverview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/account/index.md',
  [docsRoutes.cliOverview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/cli/index.md',
  [conceptsRoutes.overview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/concepts/index.md',
  [conceptsRoutes.network]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/network/index.md',
  [conceptsRoutes.networkContributors]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/network/contributors.md',
  [conceptsRoutes.networkOrchestrators]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/network/orchestrators.md',
  [conceptsRoutes.networkWorkers]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/network/workers.md',
  [conceptsRoutes.runtimeEnvironmentOverview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/runtime-environment/index.md',
  [conceptsRoutes.runtimeEnvironmentSecurity]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/runtime-environment/runtime-environment-security.md',
  [conceptsRoutes.networkWorkers]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/network/workers.md',
  [referenceRoutes.overview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/reference/index.md',
  [referenceRoutes.glossariesOverview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/glossaries/index.md',
  [referenceRoutes.glossariesFunctions]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/glossaries/functions.md',
  [referenceRoutes.glossariesNetwork]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/glossaries/network-platforms-and-user-groups.md',
  [referenceRoutes.sdkOverview]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/index.md',
  [referenceRoutes.sdkMemory]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/memory.md',
  [referenceRoutes.sdkFile]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/file.md',
  [referenceRoutes.sdkHttp]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/http.md',
  [referenceRoutes.sdkIpfs]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/ipfs.md',
  [referenceRoutes.sdkS3]:
    'https://api.github.com/repos/blocklessnetwork/docs-content/contents/blockless-sdk/s3.md',
};
