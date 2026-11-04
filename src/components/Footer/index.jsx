import ResumePreview from '@/components/Common/ResumePreview';
import ScrollReveal from '@/components/Common/ScrollReveal';
export default function Footer() {
  return (
    <ScrollReveal as='footer' className='portfolio-footer' variant='rise'>
      <div className='portfolio-footer-inner'>
        <p>Matt Stowers · Full-stack developer · Little Rock, Arkansas</p>
        <ResumePreview
          className='portfolio-footer-resume'
          label='View resume'
        />
      </div>
    </ScrollReveal>
  );
}
