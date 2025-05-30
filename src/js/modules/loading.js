let isLoading = false;
const MIN_LOADING_TIME = 750; // ms

export function showLoading() {
  const loading = document.getElementById('loading');
  if (!loading || isLoading) return;

  loading.classList.remove('opacity-0', 'opacity-100', 'hidden');
  void loading.offsetWidth;
  loading.classList.add('opacity-100');

  isLoading = true;
}

export function hideLoading() {
  if (!isLoading) return;

  const loading = document.getElementById('loading');
  if (!loading) {
    isLoading = false;
    return;
  }

  loading.classList.remove('opacity-100');
  loading.classList.add('opacity-0');

  setTimeout(() => {
    loading.classList.add('hidden');
    isLoading = false;
  }, MIN_LOADING_TIME);
}
