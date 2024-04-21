import React, { ReactNode } from 'react';

interface Label {
  text: string;
  colorstyle: string;
  children: ReactNode;
}

const Ready = ({ text, colorstyle, children }: Label) => {
  return (
    <section className={`${colorstyle}`}>
      <div className='container mx-auto max-w-screen-xl min-h96 content-center py-16'>
        <h1 className='text-center'>{text}</h1>
        <div className='my-5 flex flex-wrap justify-center'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Ready;
