# todo_api_nodewithtypescript

# expense_app_react_native

public class ConnectivityManagerAPI {
  
  private Context context;
  private ConnectivityManager connectivityManager;
  private NetworkCallback networkCallback;

  public ConnectivityManagerAPI(Context context) {
    this.context = context;
    connectivityManager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
    networkCallback = new NetworkCallback();
  }

  public void registerNetworkCallback() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
      NetworkRequest networkRequest = new NetworkRequest.Builder().build();
      connectivityManager.registerDefaultNetworkCallback(networkCallback);
    }
  }

  public void unregisterNetworkCallback() {
    connectivityManager.unregisterNetworkCallback(networkCallback);
  }

  private class NetworkCallback extends ConnectivityManager.NetworkCallback {
    @Override
    public void onAvailable(Network network) {
      super.onAvailable(network);
      // Network available, perform required actions
    }

    @Override
    public void onLost(Network network) {
      super.onLost(network);
      // Network lost, perform required actions
    }

    @Override
    public void onCapabilitiesChanged(Network network, NetworkCapabilities networkCapabilities) {
      super.onCapabilitiesChanged(network, networkCapabilities);
     if (!networkCapabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)) {
        // Network is slow, perform required actions
      }
    }

    @Override
    public void onLosing(Network network, int maxMsToLive) {
      super.onLosing(network, maxMsToLive);
      // Network is about to be lost, perform required actions
    }
  }
}
