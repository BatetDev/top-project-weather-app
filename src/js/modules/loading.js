// modules/loading.js

let isLoading = false;
let timeoutId;

const MIN_LOADING_TIME = 500; // ms

export function showLoading() {
  const loading = document.getElementById('loading');

  if (loading && !isLoading) {
    isLoading = true;
    loading.classList.remove('hidden');
  }
}

export function hideLoading() {
  if (!isLoading) return;

  // Spinner stays visible for at least 500ms
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.classList.add('hidden');
    }
    isLoading = false;
  }, MIN_LOADING_TIME);
}
