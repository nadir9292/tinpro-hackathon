import { useRouter } from "next/router"
import { useContext } from "react"
import { AppContext } from "../../src/components/AppContext"
import Layout from "../../src/components/Layout"
import useApi from "../../src/components/useApi"
import Text from "../../src/components/Text"
import Link from "next/link"
import Button from "../../src/components/Button"

const Id = () => {
  const { jwt, logout } = useContext(AppContext)
  const router = useRouter()
  const { id } = router.query
  const detailsArticle = useApi([], "get", `/api/v1/articles/find/${id}`)

  return (
    <Layout title="Kingdhome" islogged={!jwt} logout={logout}>
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={detailsArticle.pictures}
              alt={detailsArticle.pictures}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={detailsArticle.pictures}
                alt={detailsArticle.pictures}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={detailsArticle.pictures}
                alt={detailsArticle.pictures}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={detailsArticle.pictures}
              alt={detailsArticle.pictures}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* detailsArticle info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <Text variant="detail_name" size="xl">
              {detailsArticle.name}
            </Text>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Article information</h2>
            <Text variant="detail_price" size="xl">
              {detailsArticle.price}$
            </Text>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <Text variant="detail_rating" size="lg">
                  {detailsArticle.rating}⭐
                  <span>
                    <Link href="/">
                      <a>
                        <Text variant="link">Reviews</Text>
                      </a>
                    </Link>
                  </span>
                </Text>
              </div>
            </div>

            <form className="mt-10">
              <Button type="submit" variant="btnValidation" size="lg">
                Add to bag
              </Button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div className="space-y-6">
              <Text variant="detail_category" size="lg">
                {detailsArticle.description}
              </Text>
            </div>

            <div className="mt-10">
              <Text variant="detail_category" size="lg">
                Details
              </Text>

              <div className="mt-4 space-y-6">
                <Text variant="detail_category" size="md">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Id
