export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partner } = person;

  return (
    <div className="Person">
      <div className="Person__name">{name}</div>
      {age && <div className="Person__age">{age}</div>}
      <div className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partner}`
          : 'I am not married'}
      </div>
    </div>
  );
};

