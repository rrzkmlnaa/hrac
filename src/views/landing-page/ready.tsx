import Button from '@/components/buttons/Button';

interface Label {
  text: string;
}

const Ready = ({ text }:Label) => {
  return (
    <section className='bg-blue-400 text-white'>
      <div className='container mx-auto max-w-screen-xl min-h96 content-center py-16'>
        <h1 className='text-center'>{text}</h1>
        <div className='my-5 flex flex-wrap justify-center'>
          <Button
            isLoading={false}
            variant='light'
            size='base'
            className='bg-black text-white border-0 rounded-l-md rounded-r-none p-3'
          >
            Get In Touch
          </Button>
          <Button
            isLoading={false}
            variant='dark'
            className='bg-white text-black hover:text-white border-0 rounded-r-md rounded-l-none p-3'
          >
            Visit Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ready;
