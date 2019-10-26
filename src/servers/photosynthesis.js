import request from '@/utils/request';

export async function liuzhongbao(params) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function photosynthesis(mobile) {
  return request(`/api/login?mobile=${mobile}`);
}
