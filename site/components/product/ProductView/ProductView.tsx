import cn from 'clsx'
import Image from 'next/image'
import s from './ProductView.module.css'
import { FC, useEffect } from 'react'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { WishlistButton } from '@components/wishlist'
import { ProductHeader } from '@components/product'
import { Container, Text } from '@components/ui'
import { SEO } from '@components/common'
import ProductSidebar from '../ProductSidebar'
import ProductTag from '../ProductTag'
import { useAlexa } from '@lib/hooks/useAlexa'
import { useRouter } from 'next/router'
import { convert } from 'html-to-text'

interface ProductViewProps {
  product: Product
  images: any
}

const ProductView: FC<ProductViewProps> = ({ product, images }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <>
      <Container className="max-w-none w-full" clean>
        <div className="bgWrap animated fadeIn">
          <Image
            alt="Background"
            src={images[1].src}
            placeholder="blur"
            blurDataURL={images[1].blurDataURL}
            layout="fill"
            objectFit="cover"
            quality={85}
            priority={true}
          />
          <div className={s.gradient} />
        </div>
        <ProductHeader
          gameTitle={product.name}
          imageUrl={images[0].src}
          blurDataURL={images[0].blurDataURL}
        />
        {/* <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
            <ProductTag
              name={product.name}
              price={`${price} ${product.price?.currencyCode}`}
              fontSize={32}
            />
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {images.slice(2).map((image: any, i: number) => (
                  <div key={image.src} className={s.imageContainer}>
                    <Image
                      className={s.img}
                      src={image.src!}
                      placeholder="blur"
                      blurDataURL={image.blurDataURL}
                      alt={image.alt || 'Product Image'}
                      width={600}
                      height={600}
                      quality="85"
                    />
                  </div>
                ))}
              </ProductSlider>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
          </div>

          <ProductSidebar
            key={product.id}
            product={product}
            className={s.sidebar}
          />
        </div> */}
        {/* <hr className="mt-7 border-accent-2" /> */}
        {/* <section className="py-12 px-6 mb-10">
          <Text variant="sectionHeading">Related Products</Text>
          <div className={s.relatedProductsGrid}>
            {relatedProducts.map((p) => (
              <div
                key={p.path}
                className="animated fadeIn bg-accent-0 border border-accent-2"
              >
                <ProductCard
                  noNameTag
                  product={p}
                  key={p.path}
                  variant="simple"
                  className="animated fadeIn"
                  imgProps={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
            ))}
          </div>
        </section> */}
      </Container>
      <SEO
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: '800',
              height: '600',
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

export default ProductView
