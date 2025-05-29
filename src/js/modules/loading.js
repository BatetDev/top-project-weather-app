// modules/loading.js
// Manage loading spinner visibility with minimum display time guarantee

const MIN_LOADING_TIME = 500; // ms
let isLoading = false;

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
