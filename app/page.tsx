import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import { ChromeIcon, FigmaIcon, GithubIcon, FramerIcon, TwitchIcon, TwitterIcon, GitlabIcon, InstagramIcon, SlackIcon } from 'lucide-react';
import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';

export default function Home() {
  return (<div>
    <LandingSocialProofBand>
  <LandingSocialProofBandItem>
    100% encrypted and secure
  </LandingSocialProofBandItem>

  <LandingSocialProofBandItem>24/7 customer support</LandingSocialProofBandItem>

  <LandingSocialProofBandItem>
    99% customer satisfaction
  </LandingSocialProofBandItem>
</LandingSocialProofBand>

<LandingPrimaryTextCtaSection
  title="Landing page in minutes"
  description="Get 10x more done with Shadcn UI, React & Next.js, and say goodbye to repetitive tasks. You'll never go back."
  textPosition="left"
  leadingComponent={<LandingProductHuntAward />}
>
  <Button size="xl" asChild>
    <a href="#">
      Buy now
    </a>
  </Button>

  <Button size="xl" variant="outlinePrimary">
    <a href="#">Read more</a>
  </Button>

  <LandingDiscount
    className="w-full"
    discountValueText="$350 off"
    discountDescriptionText="for the first 10 customers (2 left)"
  />
</LandingPrimaryTextCtaSection>

<LandingMarquee>
  <ChromeIcon className="w-12 h-12 mx-8" />
  <FigmaIcon className="w-12 h-12 mx-8" />
  <GithubIcon className="w-12 h-12 mx-8" />
  <FramerIcon className="w-12 h-12 mx-8" />
  <TwitchIcon className="w-12 h-12 mx-8" />
  <TwitterIcon className="w-12 h-12 mx-8" />
  <GitlabIcon className="w-12 h-12 mx-8" />
  <InstagramIcon className="w-12 h-12 mx-8" />
  <SlackIcon className="w-12 h-12 mx-8" />
</LandingMarquee>

    <LandingTestimonialInline withBackground variant="secondary">
  <LandingTestimonialInlineItem
    imageSrc="https://picsum.photos/id/64/100/100"
    name="John Doe"
    text="I love this app"
  />

  <LandingTestimonialInlineItem
    imageSrc="https://picsum.photos/id/65/100/100"
    name="Jane Doe"
    text="Best app on the market"
  />

  <LandingTestimonialInlineItem
    imageSrc="https://picsum.photos/id/669/100/100"
    name="Alice Doe"
    text="Never seen anything like it"
    suffix="CEO of Instagram"
  />

  <LandingTestimonialInlineItem
    imageSrc="https://picsum.photos/id/829/100/100"
    name="Guido Ross"
    text="Nothing comes close to it"
    suffix="DevOps at Meta"
  />
</LandingTestimonialInline>
  </div>)
}