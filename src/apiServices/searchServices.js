import * as request from '@/untils/request';
export const search = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q: q,
        type: type,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
