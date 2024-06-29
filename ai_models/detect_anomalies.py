import sys
import json
import pickle
import numpy as np

def detect_anomalies(transaction):
    with open('audit_model.pkl', 'rb') as f:
        model = pickle.load(f)
    transaction = np.array(transaction).reshape(1, -1)
    prediction = model.predict(transaction)
    return prediction == -1

if __name__ == '__main__':
    transaction = json.loads(sys.argv[1])
    anomaly = detect_anomalies(transaction)
    print(json.dumps({'anomaly': anomaly}))
