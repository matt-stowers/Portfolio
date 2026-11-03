'use client';
import { useRef } from 'react';
export default function ResumePreview({ className, label = 'Resume', }) {
    const dialogRef = useRef(null);
    return (<>
      <button className={className} type='button' onClick={() => dialogRef.current?.showModal()}>
        {label} <span aria-hidden='true'>↗</span>
      </button>
      <dialog ref={dialogRef} className='resume-dialog' aria-labelledby='resume-dialog-title'>
        <div className='resume-dialog-header'>
          <h2 id='resume-dialog-title'>Matt Stowers · Resume</h2>
          <div className='resume-dialog-actions'>
            <a href='/matt-stowers-resume.pdf' download>
              Download PDF
            </a>
            <button type='button' onClick={() => dialogRef.current?.close()} aria-label='Close resume preview'>
              Close
            </button>
          </div>
        </div>
        <iframe className='resume-dialog-preview' src='/matt-stowers-resume.pdf#view=FitH' title='Resume PDF preview'/>
      </dialog>
    </>);
}
