import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Archive from '@/components/organisms/Archive'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticPaths from '@/functions/wordpress/postTypes/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'

// Define route post type.
const postType = 'team'

/**
 * Render the Team component.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component attributes as props.
 * @param  {object}  props.post       Post data from WordPress.
 * @param  {boolean} props.archive    Whether displaying single post (false) or archive (true).
 * @param  {Array}   props.posts      Array of post data from WordPress.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @return {Element}                  The Team component.
 */
export default function Team({post, archive, posts, pagination}) {
  if (archive) {
    return (
      <Layout seo={{...post?.seo}}>
        <Container>
          <Archive posts={posts} postType={postType} pagination={pagination} />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <article className="innerWrap">
          {!!post?.seo?.breadcrumbs && (
            <Breadcrumbs breadcrumbs={post.seo.breadcrumbs} />
          )}
          <RichText tag="h1">{post?.title}</RichText>
          <p>
            {post?.teamMemberProfile?.title} -{' '}
            {post?.teamMemberProfile?.location}
          </p>
          <Blocks blocks={post?.blocks} />
        </article>
      </Container>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @param  {object}  context             Context for current post.
 * @param  {object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {object}  context.previewData Post preview data.
 * @return {object}                      Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

Team.propTypes = {
  ...getPagePropTypes(postType)
}
