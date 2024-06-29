import pandas as pd
from sklearn.ensemble import IsolationForest
import pickle

def train_audit_model(data_path):
    data = pd.read_csv(data_path)
    model = IsolationForest(contamination=0.01)
    model.fit(data)
    with open('audit_model.pkl', 'wb') as f:
        pickle.dump(model, f)

if __name__ == '__main__':
    train_audit_model('financial_transactions.csv')
