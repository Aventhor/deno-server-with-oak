import { Router, Response, Request } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get(
  "/",
  async ({ request, response }: { request: Request; response: Response }) => {
    response.status = 200;
    response.body = "Hello there";
  },
);

router.get(
  "/:id",
  async (
    { params, response }: { params: { id: string }; response: Response },
  ) => {
    response.status = 200;
    response.body = params.id;
  },
);

export default router;
