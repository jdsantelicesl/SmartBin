## To run py firmata.

1. Open the firmata_arduino folder with arduino ide and run\
2. Create virtual env for python
3. install requirements.txt. ```pip install -r requirements.txt```
4. go to myenv/Lib/site-packages/pyfirmata/pyfirmata.py and change line 185 to ```len_args = len(inspect.getfullargspec(func)[0])```

## Running Ultralytics
1. python3.12 -m venv venv