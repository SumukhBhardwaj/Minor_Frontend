var trainingData = [
{ input: [0.708333333, 1, 1, 0.481132075, 0.244292237, 1, 0, 0.603053435, 0, 0.370967742, 0, 0, 0], output: [1] },

{ input: [0.166666667, 1, 0.666666667, 0.339622642, 0.283105023, 0, 1, 0.885496183, 0, 0.564516129, 0, 0, 0.5], output: [1] },

{ input: [0.25, 0, 0.333333333, 0.339622642, 0.178082192, 0, 0, 0.770992366, 0, 0.225806452, 1, 0, 0.5], output: [1] },

{ input: [0.5625, 1, 0.333333333, 0.245283019, 0.251141553, 0, 1, 0.816793893, 0, 0.129032258, 1, 0, 0.5], output: [1] },

{ input: [0.583333333, 0, 0, 0.245283019, 0.520547945, 0, 1, 0.702290076, 1, 0.096774194, 1, 0, 0.5], output: [1] },

{ input: [0.583333333, 1, 0, 0.433962264, 0.150684932, 0, 1, 0.58778626, 0, 0.064516129, 0.5, 0, 0], output: [1] },

{ input: [0.5625, 0, 0.333333333, 0.433962264, 0.383561644, 0, 0, 0.625954198, 0, 0.209677419, 0.5, 0, 0.5], output: [1] },

{ input: [0.3125, 1, 0.333333333, 0.245283019, 0.312785388, 0, 1, 0.778625954, 0, 0, 1, 0, 1], output: [1] },

{ input: [0.479166667, 1, 0.666666667, 0.735849057, 0.166666667, 1, 1, 0.694656489, 0, 0.080645161, 1, 0, 1], output: [1] },

{ input: [0.583333333, 1, 0.666666667, 0.528301887, 0.095890411, 0, 1, 0.786259542, 0, 0.258064516, 1, 0, 0.5], output: [1] },

{ input: [0.520833333, 1, 0, 0.433962264, 0.257990868, 0, 1, 0.679389313, 0, 0.193548387, 1, 0, 0.5], output: [1] },

{ input: [0.395833333, 0, 0.666666667, 0.339622642, 0.340182648, 0, 1, 0.519083969, 0, 0.032258065, 1, 0, 0.5], output: [1] },

{ input: [0.416666667, 1, 0.333333333, 0.339622642, 0.319634703, 0, 1, 0.763358779, 0, 0.096774194, 1, 0, 0.5], output: [1] },

{ input: [0.729166667, 1, 1, 0.150943396, 0.194063927, 0, 0, 0.557251908, 1, 0.290322581, 0.5, 0, 0.5], output: [1] },

{ input: [0.604166667, 0, 1, 0.528301887, 0.358447489, 1, 0, 0.694656489, 0, 0.161290323, 1, 0, 0.5], output: [1] },

{ input: [0.4375, 0, 0.666666667, 0.245283019, 0.212328767, 0, 1, 0.664122137, 0, 0.258064516, 0.5, 0, 0.5], output: [1] },

{ input: [0.604166667, 0, 0.666666667, 0.245283019, 0.488584475, 0, 1, 0.770992366, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.770833333, 0, 1, 0.528301887, 0.228310502, 0, 1, 0.328244275, 0, 0.419354839, 0, 0, 0.5], output: [1] },

{ input: [0.291666667, 1, 0, 0.528301887, 0.276255708, 0, 1, 0.763358779, 0, 0.241935484, 1, 0, 0.5], output: [1] },

{ input: [0.833333333, 0, 1, 0.433962264, 0.257990868, 0, 1, 0.610687023, 0, 0.290322581, 1, 0.5, 0.5], output: [1] },

{ input: [0.625, 1, 0, 0.386792453, 0.246575342, 0, 1, 0.687022901, 0, 0.080645161, 0.5, 0, 1], output: [1] },

{ input: [0.3125, 1, 0.666666667, 0.339622642, 0.244292237, 0, 1, 0.824427481, 1, 0.064516129, 1, 0, 0.5], output: [1] },

{ input: [0.270833333, 1, 0, 0.433962264, 0.228310502, 0, 1, 0.816793893, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.666666667, 1, 0.666666667, 0.528301887, 0.267123288, 1, 1, 0.503816794, 1, 0.161290323, 0.5, 0, 0.5], output: [1] },

{ input: [0.229166667, 1, 1, 0.433962264, 0.166666667, 0, 1, 0.816793893, 1, 0.225806452, 1, 0, 1], output: [1] },

{ input: [0.875, 0, 0.333333333, 0.622641509, 0.401826484, 0, 1, 0.694656489, 0, 0.064516129, 1, 0.5, 0.5], output: [1] },

{ input: [0.625, 1, 0.666666667, 0.528301887, 0.196347032, 1, 1, 0.65648855, 0, 0.258064516, 1, 0, 0.5], output: [1] },

{ input: [0.458333333, 1, 0.666666667, 0.150943396, 0.111872146, 0, 1, 0.396946565, 0, 0.096774194, 1, 0, 0.5], output: [1] },

{ input: [0.75, 0, 0.666666667, 0.433962264, 0.664383562, 1, 0, 0.65648855, 0, 0.129032258, 1, 0.25, 0.5], output: [1] },

{ input: [0.5, 1, 0.666666667, 0.339622642, 0.162100457, 1, 0, 0.618320611, 0, 0.193548387, 0, 0, 0.5], output: [1] },

{ input: [0.25, 0, 0.333333333, 0.103773585, 0.164383562, 0, 1, 0.740458015, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.75, 1, 0, 0.245283019, 0.116438356, 0, 1, 0.526717557, 0, 0.064516129, 1, 0, 1], output: [1] },

{ input: [0.3125, 1, 0.333333333, 0.339622642, 0.212328767, 0, 0, 0.893129771, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.520833333, 1, 0.666666667, 0.29245283, 0.335616438, 0, 0, 0.618320611, 0, 0.080645161, 0, 0.25, 0.5], output: [1] },

{ input: [0.458333333, 1, 1, 0.29245283, 0.198630137, 0, 0, 0.41221374, 1, 0.225806452, 1, 0.25, 0.5], output: [1] },

{ input: [0.354166667, 0, 0.666666667, 0.452830189, 0.116438356, 0, 0, 0.679389313, 1, 0.225806452, 0, 0, 0.5], output: [1] },

{ input: [0.520833333, 0, 0.666666667, 0.386792453, 0.406392694, 1, 1, 0.755725191, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.520833333, 1, 0.666666667, 0.528301887, 0.242009132, 0, 0, 0.717557252, 0, 0.258064516, 1, 0, 1], output: [1] },

{ input: [0.75, 0, 0.666666667, 0.575471698, 0.326484018, 0, 1, 0.58778626, 0, 0.129032258, 1, 0, 0.5], output: [1] },

{ input: [0.75, 0, 0.666666667, 0.622641509, 0.534246575, 0, 0, 0.610687023, 0, 0.129032258, 1, 0, 0.5], output: [1] },

{ input: [0.458333333, 0, 0.666666667, 0.433962264, 0.415525114, 0, 0, 0.541984733, 0, 0.241935484, 1, 0.25, 0.5], output: [1] },

{ input: [0.395833333, 1, 0.333333333, 0.339622642, 0.271689498, 0, 0, 0.832061069, 0, 0.032258065, 0.5, 0, 0.5], output: [1] },

{ input: [0.333333333, 1, 0, 0.094339623, 0.187214612, 0, 0, 0.58778626, 1, 0.483870968, 0.5, 0, 0.5], output: [1] },

{ input: [0.5, 0, 0, 0.339622642, 0.315068493, 0, 0, 0.549618321, 0, 0.064516129, 0.5, 0, 0.5], output: [1] },

{ input: [0.208333333, 1, 0.666666667, 0.433962264, 0.445205479, 0, 0, 0.847328244, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.479166667, 1, 0.333333333, 0.245283019, 0.4543379, 0, 1, 0.770992366, 0, 0.032258065, 1, 0, 0.5], output: [1] },

{ input: [0.3125, 1, 0.666666667, 0.433962264, 0.248858447, 0, 0, 0.832061069, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.375, 1, 0.666666667, 0.41509434, 0.299086758, 0, 0, 0.648854962, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.5, 0, 0.666666667, 0.320754717, 0.205479452, 0, 0, 0.335877863, 0, 0, 1, 0, -0.5], output: [1] },

{ input: [0.5, 0, 0, 0.41509434, 0.246575342, 0, 0, 0.679389313, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.458333333, 0, 0.666666667, 0.339622642, 0.296803653, 0, 0, 0.595419847, 0, 0.080645161, 1, 0, 0.5], output: [1] },

{ input: [0.770833333, 1, 0, 0.245283019, 0.401826484, 0, 0, 0.610687023, 0, 0.064516129, 0.5, 0, 0.5], output: [1] },

{ input: [0.6875, 1, 0.666666667, 0.339622642, 0.239726027, 0, 1, 0.572519084, 0, 0.290322581, 0.5, 0.75, 1], output: [1] },

{ input: [0.3125, 0, 0.666666667, 0.132075472, 0.034246575, 0, 1, 0.79389313, 0, 0.096774194, 0.5, 0, 0.5], output: [1] },

{ input: [0.708333333, 0, 0.666666667, 0.386792453, 0.287671233, 0, 0, 0.770992366, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.479166667, 1, 0.333333333, 0.377358491, 0.171232877, 0, 1, 0.664122137, 0, 0.129032258, 1, 0.25, 0.5], output: [1] },

{ input: [0.395833333, 1, 0, 0.264150943, 0.219178082, 0, 0, 0.877862595, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.333333333, 1, 0, 0.198113208, 0.305936073, 0, 0, 0.870229008, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.104166667, 1, 1, 0.226415094, 0.127853881, 0, 0, 0.786259542, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.583333333, 0, 0, 0.320754717, 0.404109589, 0, 0, 0.671755725, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.875, 0, 0.666666667, 0.150943396, 0.317351598, 1, 0, 0.450381679, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.520833333, 1, 0.333333333, 0.132075472, 0.417808219, 0, 1, 0.648854962, 0, 0, 1, 0, 1], output: [1] },

{ input: [0.479166667, 1, 1, 0.226415094, 0.136986301, 0, 0, 0.908396947, 0, 0, 0.5, 0, 0], output: [1] },

{ input: [0.25, 1, 0.333333333, 0.386792453, 0.175799087, 0, 1, 0.465648855, 0, 0, 0.5, 0, 0], output: [1] },

{ input: [0.604166667, 1, 0.666666667, 0.433962264, 0.194063927, 1, 0, 0.717557252, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.125, 0, 0, 0.41509434, 0.130136986, 0, 1, 0.847328244, 0, 0.225806452, 1, 0, 0.5], output: [1] },

{ input: [0.458333333, 1, 0.666666667, 0.056603774, 0.219178082, 0, 1, 0.549618321, 1, 0.193548387, 0.5, 0, 0.5], output: [1] },

{ input: [0.333333333, 0, 0.333333333, 0.339622642, 0.246575342, 0, 0, 0.79389313, 0, 0.096774194, 0.5, 0, 0.5], output: [1] },

{ input: [0.3125, 1, 0.333333333, 0.245283019, 0.214611872, 0, 1, 0.755725191, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.6875, 0, 0, 0.283018868, 0.189497717, 0, 1, 0.702290076, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.520833333, 1, 0.666666667, 0.245283019, 0.301369863, 0, 0, 0.580152672, 0, 0.064516129, 0.5, 0, 1], output: [1] },

{ input: [0.458333333, 1, 0.666666667, 0, 0.230593607, 0, 1, 0.633587786, 1, 0, 1, 0.25, 1], output: [1] },

{ input: [0, 1, 0.333333333, 0.339622642, 0.178082192, 0, 0, 1, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.458333333, 1, 0, 0.433962264, 0.308219178, 0, 0, 0.877862595, 1, 0, 1, 0, 0.5], output: [1] },

{ input: [0.291666667, 0, 0.666666667, 0.264150943, 0.198630137, 0, 1, 0.717557252, 0, 0.032258065, 0.5, 0, 0.5], output: [1] },

{ input: [0.541666667, 0, 0.333333333, 0.386792453, 0.283105023, 0, 0, 0.687022901, 0, 0.225806452, 0.5, 0, 0.5], output: [1] },

{ input: [0.458333333, 1, 0.666666667, 0.29245283, 0.271689498, 1, 0, 0.72519084, 0, 0.387096774, 0.5, 0, 0.5], output: [1] },

{ input: [0.625, 1, 0.333333333, 0.433962264, 0.216894977, 0, 1, 0.709923664, 1, 0, 1, 0, 0.5], output: [1] },

{ input: [0.479166667, 1, 0.333333333, 0.320754717, 0.180365297, 1, 1, 0.86259542, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.604166667, 1, 0.666666667, 0.103773585, 0.260273973, 0, 0, 0.633587786, 1, 0.096774194, 0.5, 0, 1], output: [1] },

{ input: [0.25, 1, 0.666666667, 0.169811321, 0.283105023, 0, 1, 0.824427481, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.333333333, 1, 0.333333333, 0.320754717, 0.415525114, 0, 0, 0.755725191, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.645833333, 0, 0.666666667, 0.075471698, 0.438356164, 0, 1, 0.679389313, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.479166667, 1, 1, 0.547169811, 0.392694064, 1, 1, 0.816793893, 0, 0.193548387, 0.5, 0, 1], output: [1] },

{ input: [0.270833333, 0, 0, 0.075471698, 0.317351598, 0, 0, 0.389312977, 0, 0.096774194, 0.5, 0, 0.5], output: [1] },

{ input: [0.791666667, 0, 0.666666667, 0.198113208, 1, 0, 0, 0.679389313, 0, 0.258064516, 0.5, 0, 1], output: [1] },

{ input: [0.8125, 1, 0.666666667, 0.226415094, 0.344748858, 0, 1, 0.610687023, 0, 0.161290323, 1, 0.25, 1], output: [1] },

{ input: [0.354166667, 1, 0.333333333, 0.066037736, 0.162100457, 1, 1, 0.648854962, 0, 0, 1, 0, 1], output: [1] },

{ input: [0.520833333, 0, 0.666666667, 0.150943396, 0.200913242, 0, 1, 0.664122137, 0, 0.258064516, 0.5, 0, 0.5], output: [1] },

{ input: [0.604166667, 0, 0, 0.056603774, 0.278538813, 0, 0, 0.389312977, 0, 0.161290323, 0.5, 0, 0.5], output: [1] },

{ input: [0.395833333, 1, 0.666666667, 0.283018868, 0.294520548, 1, 1, 0.79389313, 0, 0, 1, 0.5, 0.5], output: [1] },

{ input: [0.583333333, 1, 0, 0.358490566, 0.184931507, 0, 1, 0.740458015, 1, 0, 1, 0, 1], output: [1] },

{ input: [0.479166667, 1, 0.666666667, 0.41509434, 0.221461187, 0, 1, 0.748091603, 0, 0, 1, 1, 0.5], output: [1] },

{ input: [0.520833333, 0, 0.333333333, 0.358490566, 0.369863014, 1, 0, 0.671755725, 1, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.333333333, 0, 0.333333333, 0.169811321, 0.077625571, 0, 1, 0.511450382, 0, 0, 0.5, 0, 0.5], output: [1] },

{ input: [0.5, 1, 0, 0.452830189, 0.228310502, 0, 0, 0.305343511, 1, 0, 1, 0, 1], output: [1] },

{ input: [0.6875, 0, 0, 0.433962264, 0.611872146, 0, 0, 0.65648855, 0, 0.193548387, 0.5, 0, 0.5], output: [1] },

{ input: [0.479166667, 1, 0, 0.132075472, 0.244292237, 1, 1, 0.580152672, 0, 0.016129032, 1, 0.75, 1], output: [1] },

{ input: [0.291666667, 1, 0.666666667, 0.339622642, 0.431506849, 0, 1, 0.694656489, 0, 0.306451613, 1, 0.25, 0.5], output: [1] },

{ input: [0.5, 1, 0.666666667, 0.339622642, 0.273972603, 1, 0, 0.778625954, 0, 0, 1, 0.75, 0.5], output: [1] },

{ input: [0.270833333, 1, 1, 0.509433962, 0.269406393, 0, 0, 0.816793893, 0, 0.129032258, 1, 0.5, 0.5], output: [1] },

{ input: [0.625, 1, 1, 0.79245283, 0.328767123, 0, 0, 0.564885496, 0, 0.677419355, 0, 0, 1], output: [1] },

{ input: [0.708333333, 0, 0.333333333, 0.433962264, 0.157534247, 0, 1, 0.824427481, 0, 0, 1, 0.5, 0.5], output: [1] },

{ input: [0.270833333, 1, 0.666666667, 0.245283019, 0.260273973, 1, 1, 0.938931298, 0, 0.129032258, 0, 0, 1], output: [1] },

{ input: [0.4375, 1, 0.666666667, 0.330188679, 0.159817352, 0, 1, 0.702290076, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.8125, 0, 0.666666667, 0.245283019, 0.194063927, 0, 0, 0.335877863, 0, 0.241935484, 0.5, 0, 0.5], output: [1] },

{ input: [0.833333333, 1, 1, 0.622641509, 0.246575342, 1, 0, 0.458015267, 0, 0.016129032, 0.5, 0.25, 0.5], output: [1] },

{ input: [0.333333333, 0, 0, 0.41509434, 0.251141553, 0, 0, 0.618320611, 1, 0.032258065, 0.5, 0, 0.5], output: [1] },

{ input: [0.4375, 0, 0.333333333, 0.245283019, 0.269406393, 0, 1, 0.694656489, 0, 0.177419355, 1, 0, 0.5], output: [1] },

{ input: [0.4375, 0, 0, 0.150943396, 0.292237443, 0, 0, 0.671755725, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.729166667, 0, 0, 0.811320755, 0.4543379, 0, 1, 0.633587786, 1, 0, 1, 0, 0.5], output: [1] },

{ input: [0.583333333, 1, 0.666666667, 0.528301887, 0, 1, 1, 0.778625954, 0, 0.032258065, 1, 0.25, 1], output: [1] },

{ input: [0.729166667, 0, 0.666666667, 0.433962264, 0.426940639, 0, 1, 0.473282443, 0, 0.032258065, 1, 0, 1], output: [1] },

{ input: [0.291666667, 1, 0, 0.150943396, 0.194063927, 0, 1, 0.687022901, 0, 0, 1, 0, 1], output: [1] },

{ input: [0.541666667, 1, 0.333333333, 0.339622642, 0.310502283, 0, 1, 0.641221374, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.166666667, 0, 0.666666667, 0.245283019, 0.203196347, 0, 1, 0.755725191, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.25, 1, 0.666666667, 0.339622642, 0.200913242, 0, 0, 0.740458015, 0, 0.322580645, 0.5, 0, 0.5], output: [1] },

{ input: [0.5625, 1, 1, 0.245283019, 0.152968037, 0, 0, 0.694656489, 0, 0.306451613, 0.5, 0, 1], output: [1] },

{ input: [0.354166667, 0, 0.333333333, 0.103773585, 0.178082192, 0, 1, 0.770992366, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.354166667, 0, 0, 0.41509434, 0.267123288, 0, 0, 0.618320611, 1, 0, 0.5, 0, 0.5], output: [1] },

{ input: [0.729166667, 0, 0, 0.339622642, 0.404109589, 0, 1, 0.389312977, 0, 0.322580645, 0.5, 0.5, 0.5], output: [1] },

{ input: [0.625, 1, 0, 0.41509434, 0.331050228, 0, 0, 0.847328244, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.25, 0, 0.666666667, 0.169811321, 0.324200913, 0, 0, 0.770992366, 1, 0, 1, 0, 0.5], output: [1] },

{ input: [0.520833333, 0, 0.666666667, 0.132075472, 0.321917808, 0, 0, 0.732824427, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.208333333, 0, 0.666666667, 0, 0.166666667, 0, 1, 0.824427481, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.104166667, 0, 0.333333333, 0.226415094, 0.191780822, 0, 1, 0.923664122, 0, 0.112903226, 1, 0, 0.5], output: [1] },

{ input: [0.375, 1, 0, 0.169811321, 0.178082192, 0, 1, 0.549618321, 0, 0.016129032, 1, 0, 0.5], output: [1] },

{ input: [0.791666667, 0, 0.666666667, 0.547169811, 0.344748858, 0, 1, 0.770992366, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.479166667, 0, 0.666666667, 0.396226415, 0.159817352, 0, 0, 0.748091603, 0, 0.016129032, 0.5, 0, 0.5], output: [1] },

{ input: [0.9375, 0, 0.333333333, 0.245283019, 0.326484018, 0, 0, 0.381679389, 1, 0.032258065, 1, 0.25, 0.5], output: [1] },

{ input: [0.520833333, 0, 0.666666667, 0.622641509, 0.171232877, 0, 1, 0.702290076, 0, 0, 1, 0.25, 0.5], output: [1] },

{ input: [0.416666667, 0, 0.333333333, 0.377358491, 0.331050228, 0, 1, 0.694656489, 0, 0, 0.5, 0, 0.5], output: [1] },

{ input: [0.270833333, 1, 0.333333333, 0.245283019, 0.385844749, 0, 1, 0.694656489, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.25, 1, 0.333333333, 0.150943396, 0.248858447, 0, 1, 0.625954198, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.25, 0, 0.333333333, 0.301886792, 0.410958904, 0, 1, 0.702290076, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.416666667, 0, 0, 0.339622642, 0.326484018, 0, 1, 0.702290076, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.645833333, 0, 0.666666667, 0.245283019, 0.118721461, 1, 1, 0.190839695, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.6875, 1, 0.333333333, 0.320754717, 0.187214612, 1, 0, 0.526717557, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.583333333, 1, 0, 0.150943396, 0.171232877, 0, 1, 0.419847328, 1, 0.241935484, 0.5, 0, 0], output: [1] },

{ input: [0.729166667, 1, 0, 0.320754717, 0.312785388, 0, 1, 0.259541985, 1, 0.032258065, 0.5, 0.25, 1], output: [1] },

{ input: [0.458333333, 0, 0.666666667, 0.245283019, 0.385844749, 0, 0, 0.65648855, 0, 0.096774194, 1, 0, 0.5], output: [1] },

{ input: [0.291666667, 1, 0, 0.198113208, 0.404109589, 0, 1, 0.839694656, 0, 0.193548387, 0.5, 0, 0.5], output: [1] },

{ input: [0.270833333, 0, 0.666666667, 0.245283019, 0.189497717, 0, 1, 0.778625954, 0, 0, 0.5, 0, 0.5], output: [1] },

{ input: [0.791666667, 0, 0, 0.113207547, 0.221461187, 0, 1, 0.541984733, 0, 0.048387097, 1, 0.5, 0.5], output: [1] },

{ input: [0.979166667, 0, 0.666666667, 0.433962264, 0.162100457, 0, 2, 0.34351145, 0, 0.177419355, 0.5, 0, 0.5], output: [1] },

{ input: [0.854166667, 1, 0.333333333, 0.58490566, 0.271689498, 0, 0, 0.549618321, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.3125, 0, 0.666666667, 0.226415094, 0.264840183, 0, 1, 0.595419847, 0, 0.048387097, 0.5, 0.25, 0.5], output: [1] },

{ input: [0.645833333, 0, 1, 0.528301887, 0.260273973, 0, 1, 0.763358779, 0, 0.14516129, 1, 0, 0.5], output: [1] },

{ input: [0.3125, 1, 0.666666667, 0.245283019, 0.228310502, 0, 1, 0.748091603, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.270833333, 1, 0.666666667, 0.339622642, 0.123287671, 0, 1, 0.603053435, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.770833333, 1, 0, 0.622641509, 0.232876712, 0, 0, 0.511450382, 0, 0.370967742, 1, 0, 0], output: [1] },

{ input: [0.875, 0, 0, 0.169811321, 0.052511416, 0, 1, 0.41221374, 0, 0.258064516, 0.5, 0, 0.5], output: [1] },

{ input: [0.729166667, 1, 1, 0.716981132, 0.230593607, 0, 0, 0.641221374, 0, 0.096774194, 0.5, 0, 1], output: [1] },

{ input: [0.770833333, 0, 0.666666667, 0.490566038, 0.347031963, 0, 0, 0.618320611, 0, 0, 0.5, 0.25, 0.5], output: [1] },

{ input: [0.208333333, 0, 0.666666667, 0.41509434, 0.214611872, 0, 1, 0.618320611, 0, 0, 0.5, 0, 0.5], output: [1] },

{ input: [0.604166667, 0, 0, 0.339622642, 0.162100457, 0, 1, 0.458015267, 0, 0.096774194, 0.5, 0, 0.5], output: [1] },

{ input: [0.375, 1, 0.666666667, 0.339622642, 0.289954338, 0, 1, 0.824427481, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.125, 1, 0.333333333, 0.264150943, 0.150684932, 0, 1, 0.786259542, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.604166667, 1, 0.333333333, 0.29245283, 0.214611872, 0, 1, 0.557251908, 0, 0.064516129, 0.5, 1, 1], output: [1] },

{ input: [0.5625, 1, 0.333333333, 0.339622642, 0.216894977, 0, 0, 0.702290076, 0, 0, 1, 0, 1], output: [1] },

{ input: [0.5625, 1, 0.333333333, 0.245283019, 0.260273973, 0, 1, 0.748091603, 0, 0, 0, 0, 0.5], output: [1] },

{ input: [0.541666667, 0, 0.333333333, 0.358490566, 0.493150685, 0, 1, 0.72519084, 0, 0.193548387, 1, 0, 0.5], output: [1] },

{ input: [0.25, 1, 0.333333333, 0.245283019, 0.070776256, 0, 1, 0.847328244, 0, 0, 1, 0, 0.5], output: [1] },

{ input: [0.1875, 1, 0.666666667, 0.41509434, 0.111872146, 0, 1, 0.778625954, 0, 0, 1, 1, 0.5], output: [1] },

{ input: [0.1875, 1, 0.666666667, 0.41509434, 0.111872146, 0, 1, 0.778625954, 0, 0, 1, 1, 0.5], output: [1] },

{ input: [0.791666667, 1, 0, 0.622641509, 0.365296804, 0, 0, 0.282442748, 1, 0.241935484, 0.5, 0.75, 0.5], output: [0] },

{ input: [0.791666667, 1, 0, 0.245283019, 0.235159817, 0, 0, 0.442748092, 1, 0.419354839, 0.5, 0.5, 1], output: [0] },

{ input: [0.6875, 0, 0, 0.433962264, 0.324200913, 0, 0, 0.679389313, 0, 0.580645161, 0, 0.5, 0.5], output: [0] },

{ input: [0.708333333, 1, 0, 0.339622642, 0.292237443, 0, 0, 0.580152672, 0, 0.225806452, 0.5, 0.25, 1], output: [0] },

{ input: [0.5, 1, 0, 0.433962264, 0.175799087, 1, 0, 0.641221374, 1, 0.5, 0, 0, 1], output: [0] },

{ input: [0.5625, 1, 0.666666667, 0.339622642, 0.296803653, 1, 0, 0.541984733, 1, 0.096774194, 0.5, 0.25, 0], output: [0] },

{ input: [0.395833333, 1, 0.333333333, 0.150943396, 0.235159817, 0, 1, 0.740458015, 0, 0.161290323, 0, 0, 1], output: [0] },

{ input: [0.604166667, 1, 0.333333333, 0.245283019, 0.360730594, 0, 0, 0.679389313, 0, 0.290322581, 0.5, 0, 0.5], output: [0] },

{ input: [0.604166667, 1, 0.666666667, 0.358490566, 0.223744292, 0, 0, 0.778625954, 0, 0.516129032, 1, 0.5, 1], output: [0] },

{ input: [0.645833333, 1, 0, 0.339622642, 0.182648402, 0, 0, 0.465648855, 1, 0.387096774, 0.5, 0.5, 1], output: [0] },

{ input: [0.229166667, 1, 0, 0.150943396, 0.093607306, 0, 0, 0.328244275, 1, 0.322580645, 0.5, 0, 1], output: [0] },

{ input: [0.645833333, 1, 0, 0.216981132, 0.237442922, 1, 1, 0.679389313, 1, 0.225806452, 1, 0.5, 1], output: [0] },

{ input: [0.729166667, 1, 0.666666667, 0.433962264, 0.47716895, 0, 1, 0.664122137, 0, 0, 1, 0, 0.5], output: [0] },

{ input: [0.291666667, 1, 0, 0.245283019, 0.116438356, 0, 0, 0.374045802, 1, 0.403225806, 0.5, 0, 1], output: [0] },

{ input: [0.583333333, 1, 0, 0.528301887, 0.342465753, 0, 0, 0.312977099, 1, 0.096774194, 0.5, 0.25, 0], output: [0] },

{ input: [0.541666667, 1, 0, 0.358490566, 0.51826484, 0, 1, 0.465648855, 1, 0.193548387, 0.5, 0.25, 1], output: [0] },

{ input: [0.75, 0, 0, 0.528301887, 0.226027397, 0, 0, 0.328244275, 0, 0.161290323, 0.5, 0.75, 1], output: [0] },

{ input: [0.666666667, 0, 0, 0.339622642, 0.465753425, 0, 0, 0.748091603, 0, 0, 1, 0, 0.5], output: [0] },

{ input: [0.604166667, 1, 0.666666667, 0.169811321, 0.237442922, 0, 0, 0.717557252, 0, 0.403225806, 0.5, 0.25, 1], output: [0] },

{ input: [0.4375, 1, 0, 0.528301887, 0.267123288, 0, 0, 0.435114504, 0, 0.419354839, 0.5, 0, 1], output: [0] },

{ input: [0.3125, 1, 0, 0.169811321, 0.374429224, 0, 0, 0.625954198, 0, 0, 1, 0.25, 0.5], output: [0] },

{ input: [0.645833333, 1, 0, 0.339622642, 0.289954338, 0, 1, 0.557251908, 1, 0.225806452, 1, 0.25, 1], output: [0] },

{ input: [0.520833333, 1, 0, 0.283018868, 0.319634703, 0, 0, 0.290076336, 1, 0.35483871, 0.5, 0.25, 1], output: [0] },

{ input: [0.4375, 1, 0.666666667, 0.433962264, 0.244292237, 0, 1, 0.702290076, 0, 0.096774194, 0.5, 0.25, 1], output: [0] },

{ input: [0.25, 1, 0, 0.150943396, 0.105022831, 0, 0, 0.664122137, 0, 0, 1, 0, 1], output: [0] },

{ input: [0.458333333, 0, 0, 0.339622642, 0.408675799, 0, 1, 0.541984733, 1, 0.193548387, 0.5, 0, 1], output: [0] },

{ input: [0.604166667, 1, 0, 0.320754717, 0.205479452, 0, 0, 0.458015267, 1, 0.35483871, 0.5, 0.75, 1], output: [0] },

{ input: [0.520833333, 1, 0, 0.245283019, 0.141552511, 0, 1, 0.320610687, 0, 0.225806452, 0.5, 0.25, 1], output: [0] },

{ input: [0.645833333, 1, 0, 0.481132075, 0.356164384, 0, 0, 0.541984733, 1, 0.451612903, 0.5, 0.5, 1], output: [0] },

{ input: [0.645833333, 1, 0.666666667, 0.433962264, 0.134703196, 0, 0, 0.641221374, 0, 0.483870968, 0.5, 0, 0.5], output: [0] },

{ input: [0.625, 1, 0, 0.716981132, 0.456621005, 0, 0, 0.526717557, 1, 0.548387097, 0, 0, 1], output: [0] },

{ input: [0.354166667, 1, 0.666666667, 0.528301887, 0.239726027, 0, 1, 0.580152672, 0, 0.580645161, 0.5, 0, 0.5], output: [0] },

{ input: [0.791666667, 1, 0, 0.29245283, 0.292237443, 1, 1, 0.702290076, 0, 0.032258065, 0.5, 0.5, 1], output: [0] },

{ input: [0.6875, 1, 0, 0.245283019, 0.321917808, 0, 1, 0.213740458, 1, 0.290322581, 0.5, 0.5, 1], output: [0] },

{ input: [0.75, 1, 0, 0.150943396, 0.278538813, 0, 0, 0.664122137, 0, 0.096774194, 1, 0.5, 0], output: [0] },

{ input: [0.3125, 1, 0, 0.150943396, 0.162100457, 0, 0, 0.809160305, 0, 0, 1, 0.25, 0.5], output: [0] },

{ input: [0.645833333, 1, 0, 0.29245283, 0.301369863, 0, 0, 0.534351145, 1, 0.451612903, 0.5, 0.25, 1], output: [0] },

{ input: [0.604166667, 1, 0, 0.528301887, 0.328767123, 0, 0, 0.305343511, 1, 0.129032258, 1, 0, 1], output: [0] },

{ input: [0.8125, 1, 0.666666667, 0.811320755, 0.337899543, 1, 0, 0.603053435, 1, 0.258064516, 0.5, 0, 1], output: [0] },

{ input: [0.6875, 0, 0, 0.622641509, 0.086757991, 0, 0, 0.564885496, 0, 1, 0, 0.75, 1], output: [0] },

{ input: [0.479166667, 1, 0, 0.320754717, 0.294520548, 0, 1, 0.687022901, 1, 0, 1, 0.25, 1], output: [0] },

{ input: [0.625, 1, 0, 0.150943396, 0.257990868, 0, 0, 0.541984733, 1, 0.193548387, 0.5, 0.25, 1], output: [0] },

{ input: [0.645833333, 0, 0, 0.528301887, 0.301369863, 0, 0, 0.65648855, 0, 0.419354839, 0.5, 0.5, 1], output: [0] },

{ input: [0.416666667, 1, 0.666666667, 0.245283019, 0.141552511, 0, 1, 0.519083969, 0, 0.322580645, 0.5, 0.75, 1], output: [0] },

{ input: [0.625, 1, 0, 0.433962264, 0.116438356, 0, 1, 0.694656489, 1, 0, 1, 0.25, 1], output: [0] },

{ input: [0.583333333, 1, 0.666666667, 0.320754717, 0.235159817, 0, 0, 0.603053435, 0, 0.064516129, 0.5, 0.25, 1], output: [0] },

{ input: [0.666666667, 1, 0, 0.245283019, 0.305936073, 0, 1, 0.526717557, 1, 0.580645161, 0.5, 0.25, 1], output: [0] },

{ input: [0.208333333, 1, 0, 0.226415094, 0.212328767, 0, 1, 0.526717557, 0, 0.193548387, 0.5, 0, 1], output: [0] },

{ input: [0.666666667, 0, 0, 0.481132075, 0.413242009, 0, 0, 0.572519084, 1, 0.161290323, 0.5, 0, 1], output: [0] },

{ input: [0.5625, 1, 0, 0.29245283, 0.280821918, 1, 0, 0.557251908, 1, 0.193548387, 0.5, 0.25, 0.5], output: [0] },

{ input: [0.291666667, 0, 0, 0.358490566, 0.49086758, 1, 0, 0.496183206, 1, 0.483870968, 0.5, 0, 1], output: [0] },

{ input: [0.6875, 0, 0.666666667, 0.339622642, 0.312785388, 0, 1, 0.198473282, 0, 0.193548387, 0.5, 0.25, 1], output: [0] },

{ input: [0.708333333, 1, 0, 0.339622642, 0.465753425, 1, 0, 0.465648855, 1, 0.290322581, 1, 0.75, 1], output: [0] },

{ input: [0.75, 1, 0, 0.386792453, 0.292237443, 0, 0, 0.427480916, 0, 0.451612903, 0.5, 0.25, 1], output: [0] },

{ input: [0.395833333, 1, 0, 0.339622642, 0.296803653, 1, 0, 0.603053435, 1, 0, 1, 0.5, 1], output: [0] },

{ input: [0.708333333, 0, 0, 0.528301887, 0.641552511, 0, 0, 0.633587786, 0, 0.64516129, 0.5, 0.75, 1], output: [0] },

{ input: [0.541666667, 1, 0, 0.433962264, 0.207762557, 0, 1, 0.305343511, 1, 0.903225806, 0, 0, 1], output: [0] },

{ input: [0.75, 1, 1, 0.41509434, 0.356164384, 1, 0, 0.786259542, 0, 0.225806452, 0.5, 0.25, 0.5], output: [0] },

{ input: [0.5625, 0, 0, 1, 0.369863014, 1, 0, 0.473282443, 1, 0.64516129, 0, 0.5, 1], output: [0] },

{ input: [0.520833333, 1, 0, 0.150943396, 0.257990868, 0, 1, 0.419847328, 1, 0.451612903, 0.5, 0.25, 1], output: [0] },

{ input: [0.854166667, 1, 0, 0.481132075, 0.109589041, 0, 1, 0.41221374, 1, 0.419354839, 0, 0, 1], output: [0] },

{ input: [0.6875, 1, 0.333333333, 0.245283019, 0.353881279, 0, 0, 0.244274809, 0, 0.225806452, 0.5, 0.25, 1], output: [0] },

{ input: [0.125, 1, 0, 0.245283019, 0.164383562, 0, 1, 0.450381679, 1, 0.258064516, 0.5, 0, 1], output: [0] },

{ input: [0.625, 1, 1, 0.716981132, 0.369863014, 0, 0, 0.671755725, 0, 0.032258065, 0.5, 0, 1], output: [0] },

{ input: [0.729166667, 1, 0.666666667, 0.29245283, 0.417808219, 0, 1, 0.458015267, 1, 0.290322581, 0.5, 0, 1], output: [0] },

{ input: [0.375, 1, 0.666666667, 0.132075472, 0.267123288, 0, 1, 0.618320611, 0, 0, 1, 0, 0.5], output: [0] },

{ input: [0.583333333, 1, 0, 0.669811321, 0.372146119, 1, 0, 0.404580153, 0, 0.161290323, 0.5, 0.75, 1], output: [0] },

{ input: [0.541666667, 1, 0, 0.622641509, 0.372146119, 0, 0, 0.564885496, 1, 0.129032258, 0.5, 0.25, 1], output: [0] },

{ input: [0.729166667, 1, 0, 0.245283019, 0.273972603, 0, 0, 0.190839695, 1, 0.35483871, 0, 0.25, 0.5], output: [0] },

{ input: [0.854166667, 1, 0, 0.339622642, 0.447488584, 0, 0, 0.290076336, 0, 0.387096774, 0.5, 0.75, 0.5], output: [0] },

{ input: [0.458333333, 1, 0, 0.433962264, 0.394977169, 0, 1, 0.778625954, 1, 0.258064516, 1, 0, 1], output: [0] },

{ input: [0.604166667, 1, 0, 0.29245283, 0.397260274, 0, 0, 0.763358779, 0, 0, 1, 0.5, 1], output: [0] },

{ input: [0.645833333, 1, 0, 0.433962264, 0.381278539, 0, 0, 0.755725191, 0, 0.193548387, 0.5, 0.5, 1], output: [0] },

{ input: [1, 1, 0, 0.29245283, 0.406392694, 0, 0, 0.694656489, 1, 0, 1, 0.75, 0.5], output: [0] },

{ input: [0.125, 1, 0, 0.301886792, 0.356164384, 0, 0, 0.648854962, 1, 0, 1, 0, 1], output: [0] },

{ input: [0.854166667, 1, 0.666666667, 0.622641509, 0.326484018, 0, 1, 0.312977099, 1, 0.467741935, 0.5, 0.25, 1], output: [0] },

{ input: [0.625, 0, 0, 0.754716981, 0.280821918, 0, 1, 0.549618321, 1, 0, 0.5, 0, 0.5], output: [0] },

{ input: [0.729166667, 1, 0, 0.481132075, 0.196347032, 0, 0, 0.465648855, 0, 0.322580645, 0.5, 0.5, 0], output: [0] },

{ input: [0.583333333, 1, 0, 0.547169811, 0.337899543, 0, 1, 0.129770992, 1, 0.193548387, 0.5, 0.25, 1], output: [0] }
];

module.exports = {trainingData};