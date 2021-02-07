from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB

def train_preprocess(dataset):
  y=dataset['target'].values
  dataset.drop(['target'],inplace=True,axis=1)
  X=dataset.iloc[:,:].values

  if (len(set (y))<15):
    TYPE='C'
  else:
    TYPE='R'
  
  X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=0)

  if (TYPE=='C'):
    try:
      pipeline_lr=Pipeline([('scalar1',StandardScaler()),
                      ('lr_classifier',LogisticRegression())])
      pipeline_svc=Pipeline([('scalar2',StandardScaler()),
                        ('SVC_classifier',SVC(kernel='rbf'))])
      pipeline_dt=Pipeline([('scalar3',StandardScaler()),
                            ('dt_classifier',DecisionTreeClassifier())])
      pipeline_rf=Pipeline([('scalar4',StandardScaler()),
                            ('rf_classifier',RandomForestClassifier())])
      pipeline_gb=Pipeline([('scalar5',StandardScaler()),
                            ('gb_classifier',GaussianNB())])
      pipeline_knn=Pipeline([('scalar6',StandardScaler()),
                            ('knn_classifier',KNeighborsClassifier(n_neighbors=5,metric='minkowski',p=2))])
      pipelines=[pipeline_lr,pipeline_svc,pipeline_dt,pipeline_rf,pipeline_gb,pipeline_knn]
      pipe_dict={0:'Logistic_Classifier',1:'SVC',2:'Decision_Tree',3:'Random_Forest',4:'GaussianNB',5:'KNearestNeighbors'}

      for i in pipelines:
        i.fit(X_train,y_train)
      model_scores={pipe_dict[i]:model.score(X_test,y_test) for i,model in enumerate(pipelines)}

    except:
      print('Dead')

    return model_scores
        #print('{} Pipeline_Accuracy : {}  '.format(pipe_dict[i],model.score(X_test,y_test)))

  else:
    try:
      pipeline_lir=Pipeline([('lr_regressor',LinearRegression())])
      pipeline_svr=Pipeline([('scalar2',StandardScaler()),
                            ('SVR_regressor',SVR(kernel='rbf'))])
      pipeline_drt=Pipeline([ ('dt_regressor',DecisionTreeRegressor())])
      pipeline_rrf=Pipeline([('rf_regressor',RandomForestRegressor())])

      pipelines=[pipeline_lir,pipeline_svr,pipeline_drt,pipeline_rrf]
      pipe_dict={0:'Linear_Regressor',1:'SVR',2:'Decision_Tree',3:'Random_Forest'}

      for i in pipelines:
        i.fit(X_train,y_train)
      model_scores={pipe_dict[i]:model.score(X_test,y_test) for i,model in enumerate(pipelines)}

    except:
      print('Dead')

    return model_scores
 