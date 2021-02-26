module.exports = (sequelize, DataTypes) => {
  // MySQL 테이블과 컬럼 내용이 일치해야 정확하게 대응된다.
  // sequelize의 자료형은 MySQL의 자료형과 다르다
  // => VARCHAR: STRING / INT: INTEGER / TINYINT: BOOLEAN / DATETIME: DATE
  return sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("now()"),
      },
    },
    {
      timestamps: false,
      // timestamps의 값이 true이면 sequelize는 createdAt, updatedAt 컬럼을 추가한다.
      // timestamps의 값이 true일 때는 paranoid 옵션을 사용할 수 있다.
      // paranoide를 true로 설정하면 deletedeAt 컬럼이 추가되고 백업 데이터베이스를 남겨둘 수 있다.
    }
  );
};
