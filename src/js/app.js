export default function getSpecialAttack({ special }) {
  const result = [];
  for (const elem of special) {
    const {
      description = 'Описание недоступно', ...rest
    } = elem;
    result.push({
      ...rest, description,
    });
  }

  return result;
}
