import 'package:flutter/material.dart';

import '../search.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          ElevatedButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) => const SearchPage()
                )
              );
            }, 
            child: const Text('跳转到搜索页面!!'),
          ),
          const SizedBox(height: 20),
        ],
      )
    );
  }
}