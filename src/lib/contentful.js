const contentful = require("contentful");

const cf = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

class ContentfulClientApi {
  async getEntries(query) {
    try {
      const { items } = await cf.getEntries(query);
      const data = items?.map(({ fields, sys }) => ({
        ...fields,
        id: sys.id,
        createdAt: sys.createdAt,
      }));
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getEntry(query) {
    try {
      const { fields, sys } = await cf.getEntry(query);
      const data = {
        ...fields,
        id: sys.id,
        createdAt: sys.createdAt,
      };
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

const client = new ContentfulClientApi();
export { client };
