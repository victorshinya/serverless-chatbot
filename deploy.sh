if test $(which ibmcloud); then
    {
        echo "Deploying sequence" 
        ibmcloud fn action create assistant assistant.js --kind nodejs:10
        ibmcloud fn action create mongodb mongodb.js --kind nodejs:10
        ibmcloud fn action create sequence assistant,mongodb --sequence
    }
fi
