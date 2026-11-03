import ResumePreview from '@/components/Common/ResumePreview';
export default function Footer() {
    return (<footer className='portfolio-footer'>
      <div className='portfolio-footer-inner'>
        <p>Matt Stowers · Front-end developer · Little Rock, Arkansas</p>
        <ResumePreview className='portfolio-footer-resume' label='View resume'/>
      </div>
    </footer>);
}
