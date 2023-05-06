import { Circle } from './background';

export const RootComponentsBackground = () => {
  return (
    <>
      <Circle
        color='linear-gradient(80deg, rgba(207,254,206,1) 0%, rgba(123,255,82,1) 100%)'
        size={100}
        left={700}
        top={600}
        sx={{
          animation: 'rotation10 5s linear 0s infinite normal forwards',
          transform: 'translateY(-90%)',
        }}
      />
      <Circle
        color='linear-gradient(80deg, rgba(207,254,206,1) 0%, rgba(123,255,82,1) 100%)'
        size={400}
        left={1}
        top={2}
      />
      <Circle
        color='linear-gradient(80deg, rgba(254,206,206,1) 0%, rgba(255,147,147,1) 100%)'
        size={350}
        left={100}
        top={500}
      />
      <Circle
        color='linear-gradient(80deg, rgba(206,232,254,1) 0%, rgba(147,203,255,1) 100%)'
        size={150}
        left={500}
        top={300}
      />
      <Circle
        color='linear-gradient(80deg, rgba(207,254,206,1) 0%, rgba(123,255,82,1) 100%)'
        size={400}
        left={1}
        top={2}
      />
      <Circle
        color='linear-gradient(80deg, rgba(254,206,206,1) 0%, rgba(255,147,147,1) 100%)'
        size={350}
        left={100}
        top={500}
      />
      <Circle
        color='linear-gradient(80deg, rgba(206,232,254,1) 0%, rgba(147,203,255,1) 100%)'
        size={150}
        left={500}
        top={300}
      />
      <Circle
        color='linear-gradient(80deg, rgba(206,232,254,1) 0%, rgba(147,203,255,1) 100%)'
        size={700}
        right={0}
        top={-200}
      />
      <Circle
        color='linear-gradient(80deg, rgba(207,254,206,1) 0%, rgba(123,255,82,1) 100%)'
        size={100}
        right={0}
        top={500}
      />
    </>
  );
};
