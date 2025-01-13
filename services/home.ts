import ServiceCall from "./service-call";
import { home } from "./service-routes.json";

export async function GetMenuListApi() {
  const response = await ServiceCall({
    ...home.menuList
  });

  return response;
}

export async function GetPageContent (type: string){
  const response = await ServiceCall({
    ...home.pageContent,
    queryParams: {type: type}
  })
  return response;
}

export async function GetCustomerReviews () {
  const response = await ServiceCall({
    ...home.customer_reviews
  })
  return response;
}

export async function GetFooterListApi () {
  const response = await ServiceCall({
    ...home.footerList
  })
  return response;
}

export async function GetPageContentApi({ Type }: { Type: string }) {
  const response = await ServiceCall({
    ...home.content,
    queryParams: { Type: Type },
  });

  return response;
}
