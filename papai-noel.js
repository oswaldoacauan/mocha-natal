var PapaiNoel = {};

PapaiNoel.hoje = () => new Date();

PapaiNoel.eae = () => {
  const hoje = PapaiNoel.hoje();
  return hoje.getDate() === 25 && hoje.getMonth() === 11 ? `HoHoHo!` : `ZzZzzzZ`;
};

module.exports = PapaiNoel;
