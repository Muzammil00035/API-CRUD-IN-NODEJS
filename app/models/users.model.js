module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      age : Number,
      email: String,
      password: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Users = mongoose.model("users", schema);
  return Users;
};
