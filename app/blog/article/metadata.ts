import { formatPostName } from "@/helpers/utils";
import { getSinglePost } from "@/services/DataService";
import { generateMetadata } from "@/utils/metadata";

export async function generateMeta({ params }: any) {
    console.log('====================================');
    console.log('params', params);
    console.log('====================================');
  const article: any = await getSinglePost(params.slug);
  return generateMetadata(
    article.title,
    article.content,
    process.env.NEXT_PUBLIC_FILE_URL + "/" + article.coverImage,
    `https://jsk-opinions.com/blog/article?title=${formatPostName(
      article?.title
    )}&q=${article?.id}}`
  );
}
