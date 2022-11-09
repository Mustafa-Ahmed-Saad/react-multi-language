import * as Yup from 'yup';

const schema = Yup.object().shape({
  // name: Yup.string().required(),
  // email: Yup.string().email().required(),
  // username: Yup.string().required(),
});

export { schema };
